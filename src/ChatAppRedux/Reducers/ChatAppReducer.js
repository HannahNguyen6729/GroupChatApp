
const initialState = [
  { id: Date.now(), name: "Tanjiro", content: "Hello, I am the youngest member of Demon Slayer team!", avatar: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/70e2e904-f656-4660-9021-fbf490780b86/de663kn-1d0cce2c-ccf8-4423-8a8a-443d0cc77b8b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcwZTJlOTA0LWY2NTYtNDY2MC05MDIxLWZiZjQ5MDc4MGI4NlwvZGU2NjNrbi0xZDBjY2UyYy1jY2Y4LTQ0MjMtOGE4YS00NDNkMGNjNzdiOGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tqD6Eypn8ojcD-SJiHJ1MpbIFyCtiI0RYJUwqSDb3HM" },
  { id: Date.now() +1, name: "Nezuko", content: "Hello, I am a demon who is Tanjiro's little sister", avatar: "https://f8x7e8w3.rocketcdn.me/wp-content/uploads/2022/02/EXPERIENCE-Nezuko-Demon-Slayer.jpg" },
];

export const ChatAppReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'ADD_COMMENT':{
          let stateUpdate = [...state];
          stateUpdate =[...stateUpdate, action.payload];
          return stateUpdate;
      }
    default:
      return [...state];
  }
};
