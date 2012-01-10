# Coda plug-in for line manipulation #
(c) Larry Maccherone

This plugin duplicates the functionality of LineCommands.codaplugin [http://code.google.com/p/codaplugins/downloads/list] except that is written in Python and didn't reliably work on my system. This version is written in javascript and assumes that you have installed node.js.

It will delete, duplicate and move lines. There is also a command that will take whatever variable name you have selected and (on the line below) wrap it in a CoffeeScript statement to output it to the console like this:

    console.log("<variable>: #{<variable>}")

## Installation ##

To install:

1 Download the zip or tar.gz package
2 Rename it to LineCommands.codaplugin
3 Move it to ~/Library/Application Support/Coda/Plug-ins/
4 Restart Coda