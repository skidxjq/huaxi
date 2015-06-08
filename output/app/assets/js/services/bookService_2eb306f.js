app.service( 'Book', [ '$rootScope', function( $rootScope ) {
    var service = {
        books: [
            { title: "Magician", author: "Raymond E. Feist" },
            { title: "The Hobbit", author: "J.R.R Tolkien" }
        ],

        addBook: function ( book ) {
            service.books.push( book );
            $rootScope.$broadcast( 'books.update' );
        }
    };
    return service;
}]);
