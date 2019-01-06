module.exports = {
  config: {
    fileType_1: {order:1, type: 'string', default: 'a1', description: 'Enter without a dot.'},
     command_1: {order:2, type: 'string', default: 'core:cancel', description: 'if current file is the above extension, execute command:'},
    fileType_2: {order:3, type: 'string', default: 'b2', description: 'Enter without a dot.'},
     command_2: {order:4, type: 'string', default: 'core:cancel', description: 'if current file is the above extension, execute command:'},
    fileType_3: {order:5, type: 'string', default: 'c3', description: 'Enter without a dot.'},
     command_3: {order:6, type: 'string', default: 'core:cancel', description: 'if current file is the above extension, execute command:'},
    fileType_4: {order:7, type: 'string', default: 'd4', description: 'Enter without a dot.'},
     command_4: {order:8, type: 'string', default: 'core:cancel', description: 'if current file is the above extension, execute command:'},
     command_e: {order:9, type: 'string', default: 'core:cancel', description: 'else, execute command:'},
  },
  activate() {
    atom.commands.add('atom-workspace', {
      'multi-hotkey:multi': () => (this.editor_ext(), this.multi()),
    })
  },
  command(c) {
    atom.commands.dispatch(editor.component.virtualNode.domNode, c)
  },
  editor_ext() {
    editor = atom.workspace.getActiveTextEditor()
    ext = (arr = editor.getFileName().split('.'))[arr.length-1]
  },
  multi() {
    var fileType_1 = atom.config.get('multi-hotkey.fileType_1')
    var fileType_2 = atom.config.get('multi-hotkey.fileType_2')
    var fileType_3 = atom.config.get('multi-hotkey.fileType_3')
    var fileType_4 = atom.config.get('multi-hotkey.fileType_4')
    var command_1 = atom.config.get('multi-hotkey.command_1')
    var command_2 = atom.config.get('multi-hotkey.command_2')
    var command_3 = atom.config.get('multi-hotkey.command_3')
    var command_4 = atom.config.get('multi-hotkey.command_4')
    var command_e = atom.config.get('multi-hotkey.command_e')
    console.log('ext', ext)
         if (ext != 'a1' && ext == fileType_1) {this.command(command_1)}
    else if (ext != 'b2' && ext == fileType_2) {this.command(command_2)}
    else if (ext != 'c3' && ext == fileType_3) {this.command(command_3)}
    else if (ext != 'd4' && ext == fileType_4) {this.command(command_4)}
       else                                    {this.command(command_e)}
  },
}
