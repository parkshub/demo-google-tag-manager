document.getElementById("foo").addEventListener("click", (e) => {
  console.log("sending event to GTM");
  const event = {
    event: "basic event",
    action: "foo",
    category: "bar",
    value: "bar"
  };
  window.dataLayer.push(event);

  e.preventDefault();
});

document.getElementById("bar").addEventListener("click", (e) => {
  const event = {
    foo: "foo",
    value: Math.random() * 100
  };
  window.dataLayer.push(event);

  e.preventDefault();
});
