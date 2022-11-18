import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, set, get, remove } from 'firebase/database';
import { v4 as uuid } from 'uuid';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app); //데이터 베이스

export function onLogin() {
  signInWithPopup(auth, provider)
    /*
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log('토큰', token);
      return user;
    })
    */
    .catch(error => {
      console.log('에러', error);
    });
}

export function onLogout() {
  signOut(auth);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async user => {
    const updatedUser = user ? await adminUser(user) : user; //데이터 베이스 admin uid 가지고 오기
    callback(updatedUser);
  });
}

//데이터 베이스 admin uid 가지고 오기
async function adminUser(user) {
  return get(ref(database, 'admins')) //
    .then(snapshot => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
}

//데이터 베이스에 데이터 추가
export async function addNewProduct(value) {
  const id = uuid(); //고유의 id 생성
  set(ref(database, `products/${id}`), {
    ...value,
    id,
    price: parseInt(value.price),
    color: value.color.split(','),
    size: value.size.split(','),
  });
  alert('상품 등록 완료 되었습니다.');
}

//데이터 가지고 오기
export async function handleData() {
  return get(ref(database, 'products')).then(data => {
    if (data.exists()) {
      return Object.values(data.val());
    }
    return [];
  });
}

//카트에서 데이터 가지고 오기
export async function getCart(userId) {
  return get(ref(database, `carts/${userId}`)) //
    .then(snapshot => {
      const items = snapshot.val() || {};
      return Object.values(items);
    });
}

//카트에 데이터 추가
export async function addOrUpdateToCart(userId, product) {
  return set(ref(database, `carts/${userId}/${product.id}`), product);
}

//카트에서 데이터 삭제
export async function removeFromCart(userId, productId) {
  return remove(ref(database, `carts/${userId}/${productId}`));
}

//찜에서 데이터 가지고 오기
export async function getWish(userId) {
  return get(ref(database, `wish/${userId}`)) //
    .then(snapshot => {
      const items = snapshot.val() || {};
      return Object.values(items);
    });
}

//찜에 데이터 추가
export async function addWish(userId, product) {
  return set(ref(database, `wish/${userId}/${product.id}`), product);
}

//찜에서 데이터 삭제
export async function removeWish(userId, productId) {
  return remove(ref(database, `wish/${userId}/${productId}`));
}
