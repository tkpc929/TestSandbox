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

  //ボタンタグ生成(完了)
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //未完了の削除
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストの追加
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    //divイカを初期化
    addTarget.textContent = null;

    //liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backbutton);
    //complete-list に追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //ボタンタグ生成(削除)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-ul").appendChild(div);
};

//未完了リストから指定の要素を削除する
const deleteFromIncompleteList = (target) => {
  //押されたボタンの親タグ(div)の削除
  document.getElementById("incomplete-ul").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
