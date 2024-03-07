let sendButton: HTMLButtonElement;
let messageInput: HTMLInputElement;
let chatHistoryElement: HTMLDivElement;
let statusText: HTMLParagraphElement;

const chatHistory: string[] = [];

const STATUS_PREFIX = "Status: ";

window.onload = function () {
  // set dom refs
  sendButton = document.getElementById("sendButton") as HTMLButtonElement;
  messageInput = document.getElementById("messageInput") as HTMLInputElement;
  chatHistoryElement = document.getElementById("chatHistory") as HTMLDivElement;
  statusText = document.getElementById("statusText") as HTMLParagraphElement;

  // event listeners for sending a message
  sendButton.addEventListener("click", handleSend);
  messageInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSend();
  });
};

async function handleSend() {
  const message = messageInput.value;

  if (!message) return;

  console.log("Sending message: ", message);
  messageInput.value = "";
  statusText.textContent = STATUS_PREFIX + "getting response...";
  chatHistory.push(message);
  chatHistoryElement.innerHTML += `<p>You: ${message}</p>`;

  const responseMessage = await getGPTReply(message);

  statusText.textContent = STATUS_PREFIX + "ready for message";
  chatHistoryElement.innerHTML += `<p>GPT: ${responseMessage}</p>`;
}
