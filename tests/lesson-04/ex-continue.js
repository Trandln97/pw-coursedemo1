const scores = [85, 92, 78, 95, 60, 88];
for (let i = 0; i < scores.length; i++) {
    if (scores[i] < 90) {
        continue;
    }
    console.log(scores[i]);
}