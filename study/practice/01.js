< !DOCTYPE html >
    <html>

        <head>
            <title></title>
        </head>

        <body>
            <script>
                alert("Hello World")
                document.body.innerHTML = "<h1>안녕하세요</h1>"
                {/* 변수를 선언합니다. */}
                let list = ''

                {/* 연산자를 사용합니다. */}
                list += '<ul>'
                list += '   <li>Hello</li>'
                list += '   <li>JavaScript...!</li>'
                list += '</ul>'

                {/* 문서에 출력합니다. */}
                document.write(list)
                --------------------------------
                const r
                r = 10

                console.log('넓이 = ${3.14 * r * r}')
                console.log('둘레 = ${2 * 3.14 * r}')
                {/* 결과 = undefinnded */}
                ---------------------------------
                const number = 10

                console.log(++number)
                console.log(number++)
                console.log(++number)
                console.log(--number)
            </script>
        </body>

    </html>