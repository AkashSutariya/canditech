async function get() {
    return await fetch("https://canditech-assets-u.s3.amazonaws.com/questions_and_tasks_assets/Canditech/assessment_data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (result) {
        return result;
    })
    .catch(function (error) {
        return error;
    });
}

export const assessment = {
    get
};