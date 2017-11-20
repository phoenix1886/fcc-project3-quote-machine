var randomQuote =()=> {
    $.ajax({
        url: 'https://api.forismatic.com/api/1.0/',
        jsonp: "jsonp",
        dataType: 'jsonp',
        data: {
            lang: 'en',
            method: 'getQuote',
            format: "jsonp",
        },
        success: parseQuote
    })
}

var parseQuote =(respone)=>{
    var quote = respone.quoteText;
    var quoteAuthor = respone.quoteAuthor;
    $('#random-quote').html('<blockquote>"'+quote.trim()+'"</blockquote>');
    $('#quote-author').html('- <strong class="font-italic">'+quoteAuthor+'</strong>');

     $('#twitter-btn').attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + ' ('+ quoteAuthor) + ')');

}

$('#button-quote').on('click', randomQuote);
$(document).ready(randomQuote);

