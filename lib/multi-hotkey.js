'use babel'

import { CompositeDisposable } from 'atom'

export default {
  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'multi-hotkey:multi-hotkey': () => this.multi()
    }))
  },

  deactivate() {
    this.subscriptions.dispose()
  },

  multi() {
    var path = document.getElementsByClassName('current-path')[0].innerHTML
    var point = path.lastIndexOf('.')
    var ext = path.substring(point+1)
    var editor = atom.workspace.getActiveTextEditor()
    var node = editor.component.virtualNode.domNode

    if (ext == 'cpp') {
      atom.commands.dispatch(node, 'gpp-compiler:compile')
    }
    else {
      atom.commands.dispatch(node, 'script-runner:run')
    }

  }
};
