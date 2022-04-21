const keyword_extractor = require("keyword-extractor");

const triviaInput = triviaGet(number)

//  Extract the keywords
const extraction_result =
keyword_extractor.extract(triviaInput,{
    language:"english",
    remove_digits: true,
    return_changed_case:false,
    remove_duplicates: true

});

const keyword = extraction_result[0]