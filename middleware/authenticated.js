// /en store importamos index.js, redirect direcciona a /panel/dashboard
export default function({ store, redirect }) {
  // If the user is no authenticated
  if (!store.state.authenticated) {
    return redirect('/auth/login')
  } else {
    return redirect('/panel/dashboard')
  }
}
