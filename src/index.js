import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグを生成
  const li = document.createElement("li");
  li.innerText = inputText;

  console.log(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
