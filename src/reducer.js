export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    spotify: null,
    // token: 'BQCSN3M0k3SaV8dAVHno-gYyediJ6DQTn34SJaT7Rwt0kQgjS87ALLe7EYhUZC7yCwNo7_s2NPwtgPfAhCUfhBsMFLbcqzNOq5L87CysMuAVf4BX6tsYrrc3nhtP0wa0dv5h-W3gVwMlfFg39ETsCjLmWuTtv6xWeyqB41tC9RxMOBDRgJJL'
    token: null
}

const reducer = (state, action) => {
    console.log(action)

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
        default: return state
    }

}

export default reducer