'use babel'

import { CompositeDisposable } from 'atom'

export default {
  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.commands.add('atom-workspace atom-text-editor:not([mini])', {
      'multi-hotkey:multi-hotkey': () => this.multi(),
      'multi-hotkey:print': () => this.print(),
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

    if (ext == 'js') {
      console.log('js')
      // atom.commands.dispatch(node, 'gpp-compiler:compile')
    }
    else {
      console.log('not js')
      // atom.commands.dispatch(node, 'script-runner:run')
    }
  },

  print() {
    console.log(123)
  }

};
