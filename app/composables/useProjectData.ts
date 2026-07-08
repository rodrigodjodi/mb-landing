import { collection, getDocs, query, orderBy } from 'firebase/firestore'
export const useProjectData = async () => {
    console.log('[useProjectData] composable called')
    const { db } = await useFirebaseClient()
    // console.log(db)
    const projetosRecentes: Ref<Array<Record<string, any>>> = ref([])
    const collRefProjetos = collection(db, 'projetos')
    /**Recent Cards Computed
     * All projects for display on home page,
     * sorted by publish date,
    */
   const recentCards = async () => {
       const q = query(collRefProjetos,
           orderBy('publicacao', 'desc'),
       )
       const snapshotProjetosRecentes = await getDocs(q)
       snapshotProjetosRecentes.forEach(doc => {
           projetosRecentes.value.push({ id: doc.id, ...doc.data() })
       })
       // console.log('[useProjectData] fetched projetos recentes:', projetosRecentes.value)
        return projetosRecentes.value.map(proj => {
             const storageRoot = `https://firebasestorage.googleapis.com/v0/b/maquete-de-bolso.firebasestorage.app/o/projetos%2F${proj.id}%2F`;
            return {
                title: proj.seo.title,
                url: `${proj.id}.maquetedebolso.com.br`,
                to: `https://${proj.id}.maquetedebolso.com.br`,
                target: '_blank',
                coverImg: `${storageRoot}cover.jpg?alt=media`,
                logo: `${storageRoot}logos%2Fapple-touch-icon.png?alt=media`,
            }
        })
    }
    return { recentCards }
}