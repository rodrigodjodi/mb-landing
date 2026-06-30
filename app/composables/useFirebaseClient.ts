let firebaseClient: Awaited<ReturnType<typeof initFirebase>> | null = null

async function initFirebase() {
  if (import.meta.server)
    throw new Error('Firebase can only run in the client')


  // console.log(config.public.apiKey)
  const firebaseConfig = {
    apiKey: "AIzaSyBDoPDWCfQA9WwXj4MS1mS3X4tXhQbhAJ4",
    authDomain: "maquete-de-bolso.firebaseapp.com",
    databaseURL: "https://maquete-de-bolso.firebaseio.com",
    projectId: "maquete-de-bolso",
    storageBucket: "maquete-de-bolso.firebasestorage.app",
    messagingSenderId: "789088604035",
    appId: "1:789088604035:web:3dc520c8c2d7d01dacf0b6",
    measurementId: "G-8RMRHCRG99"
};


  const { initializeApp, getApps } = await import('firebase/app')
  const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)

  const [{ getAuth }, { getFirestore }, { getStorage }] = await Promise.all([
    import('firebase/auth'),
    import('firebase/firestore'),
    import('firebase/storage')
  ])

  return {
    app,
    auth: getAuth(app),
    db: getFirestore(app),
    storage: getStorage(app)
  }
}

export async function useFirebaseClient() {
  console.log('[useFirebaseClient] composable called')
  if (!firebaseClient)
    firebaseClient = await initFirebase()
  return firebaseClient
}
