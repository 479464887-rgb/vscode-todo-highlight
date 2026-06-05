const vscode = require('vscode');
function activate(context) {
  console.log('vscode-todo-highlight activated');
  let disposable = vscode.commands.registerCommand('vscode-todo-highlight.hello', () => {
    vscode.window.showInformationMessage('vscode-todo-highlight is ready!');
  });
  context.subscriptions.push(disposable);
}
function deactivate() {}
module.exports = { activate, deactivate };
