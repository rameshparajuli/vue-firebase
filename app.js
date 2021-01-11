new Vue({
  el: "#app",
  data: {
    title: "Becoming a VUE Ninja",
    name: "Ramesh Parajuli",
    url: "https://www.youtube.com/channel/UCPRVGurhPjDyPtxJMiSpKFA",
    classes: ["two", "one", "three"],
    wages: 5,
    showName: false,
    writtenName: null,
    coords: {
      x: 0,
      y: 0,
    },
    items: ["a", "b", "c", "d"],
    nameList: [
      {
        id: 1,
        name: "Ramesh Parajuli",
        faculty: "Science and Technology",
      },
      {
        id: 2,
        name: "Ramesh Parajuli",
        faculty: "Science and Technology",
      },
      {
        id: 3,
        name: "Ramesh Parajuli",
        faculty: "Science and Technology",
      },
    ],
  },
  methods: {
    greet(text) {
      return `Hello There, good ${text} Mr. ${this.name} `;
    },
    changeWages(amount) {
      this.wages += amount;
    },
    logEvent(e) {
      console.log("event is", e);
      this.coords.x = 0;
      this.coords.y = 0;
    },
    logCoords(e) {
      this.coords.x = e.offsetX;
      this.coords.y = e.offsetY;
    },
    updateName(e) {
      this.name = e.target.value;
    },
    modifierLogMessage(e) {
      console.log("hello message modifier");
    },
    changeShowName() {
      this.showName = true;
    },
    changeShowNameFalse() {
      this.showName = false;
    },
  },
});
