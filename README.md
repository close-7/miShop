# miShop
vue全家桶仿小米


master:默认开发分支
origin:默认远程版本库
Head:默认开发分支
Head^:head的父提交
#git 操作命令
创建版本仓库           git clone <url>
初始化本地版仓库        git init 

#修改和提交             
查看状态                git status
查看变更内容             git diff
跟踪所有改动过的文件      git add .
跟踪指定的文件           git add <file>
文件改名                git mv <old> <new>
删除文件                git rm <file>
停止跟踪文件但不删除      git rm --cached <file>
提交所有更新过的文件      git commit -m 'commit message'
修改最后一次提交         git commit --amend

#查看提交历史
查看提交历史                    git log
查看指定文件的提交历史            git log -p <file>
以列表方式查看指定文件的提交历史    git blame <file>

#撤销
撤销工作目录中所有未提交文件的修改内容   git reset --hard HEAD
撤销指定的未提交文件的修改内容          git checkout HEAD <file>
撤销指定的提交                       git revert <commit>

#分支与标签
显示所有本地分支            git branch
切换到指定分支或标签         git checkout <branch/tag>
创建新的分支               git branch <new-branch>
删除本地分支               git branch -d <branch>
列出所有本地分支            git tag
基于最新提交创建标签         git tag <tagname>
删除标签                   git tag -d <tagname>

#合并与衍合
合并指定分支到当前分支        git merge <branch>
衍合指定分支到当前分支        git rebase <branch>

#远程操作
查看远程版本库信息           git remote -v
查看指定远程版本库信息        git remote show <remote>
添加远程版本库              git remote add <remote> <url>
从远程库获取代码            git fetch <remote>
下载代码及快速合并          git pull <remote> <branch>
上传代码及快速合并          git push <remote> <branch>
删除远程分支或标签          git push <remote> : <branch/tag-name>
上传所有标签               git push --tags

