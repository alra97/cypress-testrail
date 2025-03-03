#1. Install test project
npm install

# 2. Run tests
npx cypress run --reporter "junit" --reporter-options "mochaFile=reports/junit-[hash].xml"

#3. Install TR CLI
pip install trcli

#4. Merge reports
junitparser merge --glob "reports/junit-*" "reports/junit-report.xml"

#5. Upload results
trcli -y `
    -h "link of the project" `
    -u "your testrail email id" `
    -p "your testrail password" `
    --project "Todo App Test Project" `
    parse_junit `
    -f "reports/junit-report.xml" `
    --title "Cypress automated tests"
