# Jiny-Tree
첫 번째
어제 만들었던 html+css 를 깃 허브에 올리기로 했다.
.git이 생성되는 원리를 몰라서 헤매다가 결국 해결하지 못하고 빠른 올리기로 했다.
git init
git add . 
(git status) git remote ~~ //여기까진 잘되었음
git push origin main 여기서 error: failed to push some refs to 'github.com:strombreeding/Jiny-Tree.git' 이 에러가 나오면서 안된다

깃허브 만지면서 깃을 통해서 버전관리 하는것에 대하여 배웠다.
위 순서에서 6,7번 사이에 들어가야할 config "first config" 이 버전관리이다.
예를들어 변경사항이 있을때 새로운 config을 만들어 "새로운 데미지 스킨 적용" 이라는 컨픽을 만들면
깃 에서는 2가지 버전이 있다. '데미지 스킨 적용'을 안한 버전, 한 버전 
깃의 장점은 데미지 스킨을 적용한 버전에서 문제가 발생했을때 그 전 버전으로 돌릴수 있는 것이다. 
이 때 reset과 revert 가 있는데 reset 은 선택한 과거까지의 버전을 숙청하는 것이고 revert는 선택한 버전까지 다 살리고 돌아감
사용법은 git reset --hard(log로 확인한 comit 번호)
         git revert --hard(")
         
