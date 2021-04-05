import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("input-text").value;
  document.getElementById("input-text").value = "";

  const ul = document.getElementById("incomplete-list");
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  div.innerText = inputText;
  li.appendChild(div);
  ul.appendChild(li);

  // 完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const innerText = deleteButton.parentElement.firstElementChild.innerText;
    const deleteTarget = deleteButton.parentNode.parentNode;
    deleteFromIncompleteList(deleteTarget);

    const ul2 = document.getElementById("complete-list");
    const li2 = document.createElement("li");
    const div2 = document.createElement("div");
    div2.className = "list-row";
    div2.innerText = innerText;
    const reverseButton = document.createElement("button");
    reverseButton.innerText = "戻す";
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

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
