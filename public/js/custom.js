$(function() {
  $("#lifestream").lifestream({
    limit: 25,
    list: [
      {
        service: "github",
        user: "christianv"
      },
      {
        service: "twitter",
        user: "denbuzze"
      }
    ]
  })
});
