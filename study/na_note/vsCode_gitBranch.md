## VS Code에서 Git Branch 관리 방법

**1. 브랜치 생성**

- **UI 사용:**  
  VS Code 왼쪽의 소스 제어(또는 Git) 패널에서 "BRANCHES" 영역을 찾고, 현재 브랜치명 옆의 **+** 버튼이나 우클릭 메뉴에서 "Create Branch"를 선택해 새 브랜치 이름을 입력하면 브랜치가 생성됩니다[4][6].
- **터미널 사용:**  
  ```
  git branch 브랜치명      # 브랜치 생성
  git switch 브랜치명      # 브랜치로 이동
  ```
  또는 한 번에 생성과 이동:
  ```
  git switch -c 브랜치명
  ```
  위 명령어로 새 브랜치를 만들고 바로 이동할 수 있습니다[2][5].

**2. 브랜치 전환**

- **UI 사용:**  
  "BRANCHES"에서 원하는 브랜치에 우클릭 → "Switch to Branch" 선택[5][6].
- **터미널 사용:**  
  ```
  git switch 브랜치명
  ```
  현재 어떤 브랜치에 있는지 확인하려면:
  ```
  git branch
  ```

**3. 브랜치 병합(Merge)**

- **UI 사용:**  
  "BRANCHES"에서 병합할 브랜치에 우클릭 → "Merge into Current Branch" 선택[6].
- **터미널 사용:**  
  ```
  git switch main           # 병합할 대상 브랜치(main 등)로 이동
  git merge 브랜치명        # 병합할 브랜치 지정
  ```
  병합 중 충돌(conflict)이 발생하면, VS Code가 충돌 부분을 시각적으로 표시해주며, 원하는 변경사항을 선택 후 저장하고 커밋하면 됩니다[2][6].

**4. 브랜치 삭제**

- **터미널 사용:**  
  ```
  git branch -d 브랜치명
  ```
  현재 체크아웃된(활성화된) 브랜치는 삭제할 수 없으니, 다른 브랜치로 이동 후 삭제해야 합니다[5].

**5. 브랜치 상태 및 히스토리 확인**

- **터미널 사용:**  
  ```
  git log --graph --oneline --all
  ```
  브랜치와 커밋 히스토리를 시각적으로 확인할 수 있습니다[2].
- **확장 프로그램:**  
  "Git Graph" 등 확장 프로그램을 설치하면 브랜치 구조를 더 쉽게 시각화할 수 있습니다[2][6].

---

### 실전 팁

- **기능별로 브랜치를 만들어 작업**하면, 메인(main/master) 브랜치에 영향을 주지 않고 안전하게 개발할 수 있습니다.
- **병합 전에는 항상 최신 상태로 Pull** 받아 충돌을 최소화하세요.
- **충돌 발생 시** VS Code의 시각적 도구를 활용해 쉽게 해결할 수 있습니다.

---

#### 요약

| 작업          | UI 방법                                     | 터미널 명령어                                 |
| ------------- | ------------------------------------------- | --------------------------------------------- |
| 브랜치 생성   | BRANCHES → Create Branch                    | `git branch 브랜치명``git switch -c 브랜치명` |
| 브랜치 전환   | BRANCHES → Switch to Branch                 | `git switch 브랜치명`                         |
| 브랜치 병합   | BRANCHES → Merge into Current Branch        | `git merge 브랜치명`                          |
| 브랜치 삭제   | BRANCHES → Delete Branch(확장프로그램 필요) | `git branch -d 브랜치명`                      |
| 브랜치 확인   | BRANCHES에서 확인                           | `git branch`                                  |
| 히스토리 보기 | Git Graph 확장프로그램                      | `git log --graph --oneline --all`             |

VS Code에서는 **UI와 터미널을 병행**해 브랜치 관리를 쉽게 할 수 있습니다. 협업이나 기능 개발 시 브랜치를 적극적으로 활용하세요.

Citations:
[1] https://parkparkpark.tistory.com/53
[2] https://alwaysgame.tistory.com/entry/Git-Branch-%EC%82%AC%EC%9A%A9%EB%B2%95-git-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EC%83%9D%EC%84%B1-%EB%B0%8F-%EA%B4%80%EB%A6%AC
[3] https://cinnamonlover.tistory.com/entry/VSCode-%EC%97%90%EC%84%9C-Git-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
[4] https://velog.io/@kleu358/Visual-Studio-Code%EB%A1%9C-git-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B02
[5] https://yejinrla.tistory.com/184
[6] https://inpa.tistory.com/entry/GIT-%E2%9A%A1%EF%B8%8F-VSCode%EC%97%90%EC%84%9C-Git-GUI-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
[7] https://itforfun.tistory.com/105
[8] https://velog.io/@ahnsanghyeon/VSCode%EC%97%90%EC%84%9C-Git-%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0
[9] https://kwon-eb.tistory.com/entry/git-vscode%EC%97%90%EC%84%9C-%EB%B8%8C%EB%9F%B0%EC%B9%98-%EB%A8%B8%EC%A7%80%ED%95%98%EA%B8%B0-3-git-graph
[10] https://gunrestaurant.tistory.com/38

---
Perplexity로부터의 답변: pplx.ai/share