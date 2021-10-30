array=("help" "contact" "doubts" "info" "account")

for element in ${array[@]}; do
    cp index.html "${element}.html"
done