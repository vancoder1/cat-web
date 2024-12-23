$(document).ready(function () {
    // Vote Form Submission
    $('#voteForm').on('submit', function (e) {
        e.preventDefault();

        const selectedCat = $('#catSelect').val();
        const voterName = $('#inputName').val().trim();

        if (!voterName) {
            alert('Please enter your name');
            return;
        }

        const voteSpanId = `${selectedCat.toLowerCase()}-votes`;
        const $voteSpan = $(`#${voteSpanId}`);
        const currentVotes = parseInt($voteSpan.text(), 10);
        const newVotes = currentVotes + 1;
        $voteSpan.text(newVotes);

        // Clear the form
        $('#inputName').val('');
        $('#catSelect').val('Mona');
        alert(`Thank you, ${voterName}! Your vote for ${selectedCat} has been counted.`);
    });
});