:serverStart
ECHO OFF
color a
ECHO Starting Server...
TITLE Sever Initiator

CD %CD%
node server js
Echo Error or Terminated

ECHO Restarting...
goto:serverStart
Exit
