import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Post.js').Post[]} */
  posts: [],
  /** @type {import('./models/Profile.js').Profile | null} */
  activeProfile: null,

  currentPage:0,
likes:0,
  totalPages:0,
  older: '',
  newer: '',

  /** @type {import('./models/Commercial.js').Commercial[]} */
  commercials: []

})
