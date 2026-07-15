import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getFirestore, doc, getDoc, setDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

  // ⬇️⬇️⬇️  COLE AQUI o firebaseConfig do seu projeto  ⬇️⬇️⬇️
  // (Console do Firebase › ⚙ Configurações do projeto › Seus apps › SDK › Configuração)
  const firebaseConfig = {
    apiKey: "AIzaSyAh6FDxEwnavbl7rwy39AOIvFkC0JkyYNI",
    authDomain: "fast-os-8f9ea.firebaseapp.com",
    projectId: "fast-os-8f9ea",
    storageBucket: "fast-os-8f9ea.firebasestorage.app",
    messagingSenderId: "518532725927",
    appId: "1:518532725927:web:21983f8b2c7313335c6f82"
  };
  // ⬆️⬆️⬆️  não precisa mexer em mais nada abaixo  ⬆️⬆️⬆️

  try {
    if (String(firebaseConfig.apiKey).includes("COLE_AQUI")) {
      console.warn("[FAST OS] Firebase ainda não configurado — usando armazenamento local do navegador.");
    } else {
      const app = initializeApp(firebaseConfig);
      const db  = getFirestore(app);
      const ref = doc(db, "fast_os", "estado");   // coleção "fast_os", documento "estado"
      window.FB = {
        async load(){ const s = await getDoc(ref); return (s.exists() && s.data().json) ? JSON.parse(s.data().json) : null; },
        async save(state){ await setDoc(ref, { json: JSON.stringify(state), updatedAt: Date.now() }); },
        watch(cb){ onSnapshot(ref, s => { if (s.exists() && s.data().json) cb(JSON.parse(s.data().json)); }); }
      };
      console.log("[FAST OS] Firebase conectado.");
    }
  } catch (e) {
    console.error("[FAST OS] Falha ao iniciar Firebase (seguindo em modo local):", e);
  }
  window.dispatchEvent(new Event('fb-ready'));