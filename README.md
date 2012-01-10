# Coda plug-in for line manipulation #
(c) Larry Maccherone

This plugin duplicates the functionality of the original [LineCommands.codaplugin](http://code.google.com/p/codaplugins/downloads/list) linked to from the Panic! Coda web site. The difference is that the original is written in Python and didn't reliably work on my system. This version is written in javascript and assumes that you have installed node.js. It seems to run reliably on my Mac OSX 10.6 system.

It will delete, duplicate and move lines. There is also a command that will take whatever variable name you have selected and (on the line below) wrap it in a CoffeeScript statement to output it to the console like this:

    console.log("<variable>: #{<variable>}")

## Installation ##

To install:

1. Download the zip package
2. Unzip it. You'll end up with a folder named like lmaccherone-LineCommands.codaplugin-3bf2410
3. Rename the folder to LineCommands.codaplugin
4. Move the renamed folder to ~/Library/Application Support/Coda/Plug-ins/
5. Restart Coda