import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("input-text").value;
  document.getElementById("input-text").value = "";

  addToIncompleteList(inputText);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

const addToIncompleteList = (text) => {
  const ul = document.getElementById("incomplete-list");
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  div.innerText = text;
  li.appendChild(div);
  ul.appendChild(li);

  // 完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const innerText = deleteButton.parentNode.childNodes[0].textContent;
    const deleteTarget = deleteButton.parentNode.parentNode;
    deleteFromIncompleteList(deleteTarget);

    // 完了リストに追加する
    const ul2 = document.getElementById("complete-list");
    const li2 = document.createElement("li");
    const div2 = document.createElement("div");
    div2.className = "list-row";
    div2.innerText = innerText;

    // 戻すボタン
    const reverseButton = document.createElement("button");
    reverseButton.innerText = "戻す";
    reverseButton.addEventListener("click", () => {
      const text = reverseButton.parentNode.childNodes[0].textContent;
      addToIncompleteList(text);
      const listItem = reverseButton.parentNode.parentNode;
      deleteFromCompleteList(listItem);
    });

    div2.appendChild(reverseButton);
    li2.appendChild(div2);
    ul2.appendChild(li2);
  });
  div.appendChild(completeButton);

  // 削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });
  div.appendChild(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
