@echo off
echo Committing to Git...
git add .
set /p commitMsg="Enter commit message (or press enter for 'Update'): "
if "%commitMsg%"=="" set commitMsg=Update
git commit -m "%commitMsg%"
echo Pushing to GitHub...
git push

echo.
echo Deploying to Vercel Production Environment...
vercel --prod
pause
