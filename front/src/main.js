async function getBitso () {
    var data = await fetch('https://api.bitso.com/v3/available_books/');
    const myJson = await data.json();
    console.log(myJson);
    return myJson;
  }

  function saveBitcoinBooks (books) {
    $scope.date = new Date().toISOString();
    for (var i = 0; i < books.length; i++){
      books[i].date = $scope.date;
    }
    const payload = {
      books: books
    };
    bitcoinBooks.save(payload)
      .then(function(success){
        getBitcoinBooks()
      })
  }

async function init () {
    var succ = await getBitso();
    saveBitcoinBooks(succ.payload);
  }
  init();

  $scope.timeChanged = function (newTime) {
    $scope.timer = newTime.value * 3600000;
  }
  $interval(init, $scope.timer);