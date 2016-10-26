var deck = (function(){

    var Card = function(suit, rank, name){
        this.suit = suit;
        this.rank = rank;
        this.name = name;
    };

    var deck = {
        'initialize': function(){
            this.cards = [
                new Card('diamonds', 'ace', 'ace of diamonds'),
                new Card('diamonds', 'two', 'two of diamonds'),
                new Card('diamonds', 'three', 'three of diamonds'),
                new Card('diamonds', 'four', 'four of diamonds'),
                new Card('diamonds', 'five', 'five of diamonds'),
                new Card('diamonds', 'six', 'six of diamonds'),
                new Card('diamonds', 'seven', 'seven of diamonds'),
                new Card('diamonds', 'eight', 'eight of diamonds'),
                new Card('diamonds', 'nine', 'nine of diamonds'),
                new Card('diamonds', 'four', 'ten of diamonds'),
                new Card('diamonds', 'jack', 'jack of diamonds'),
                new Card('diamonds', 'queen', 'queen of diamonds'),
                new Card('diamonds', 'king', 'king of diamonds'),
                new Card('clubs', 'ace', 'ace of clubs'),
                new Card('clubs', 'two', 'two of clubs'),
                new Card('clubs', 'three', 'three of clubs'),
                new Card('clubs', 'four', 'four of clubs'),
                new Card('clubs', 'five', 'five of clubs'),
                new Card('clubs', 'six', 'six of clubs'),
                new Card('clubs', 'seven', 'seven of clubs'),
                new Card('clubs', 'eight', 'eight of clubs'),
                new Card('clubs', 'nine', 'nine of clubs'),
                new Card('clubs', 'four', 'ten of clubs'),
                new Card('clubs', 'jack', 'jack of clubs'),
                new Card('clubs', 'queen', 'queen of clubs'),
                new Card('clubs', 'king', 'king of clubs'),
                new Card('hearts', 'ace', 'ace of hearts'),
                new Card('hearts', 'two', 'two of hearts'),
                new Card('hearts', 'three', 'three of hearts'),
                new Card('hearts', 'four', 'four of hearts'),
                new Card('hearts', 'five', 'five of hearts'),
                new Card('hearts', 'six', 'six of hearts'),
                new Card('hearts', 'seven', 'seven of hearts'),
                new Card('hearts', 'eight', 'eight of hearts'),
                new Card('hearts', 'nine', 'nine of hearts'),
                new Card('hearts', 'four', 'ten of hearts'),
                new Card('hearts', 'jack', 'jack of hearts'),
                new Card('hearts', 'queen', 'queen of hearts'),
                new Card('hearts', 'king', 'king of hearts'),
                new Card('spades', 'ace', 'ace of spades'),
                new Card('spades', 'two', 'two of spades'),
                new Card('spades', 'three', 'three of spades'),
                new Card('spades', 'four', 'four of spades'),
                new Card('spades', 'five', 'five of spades'),
                new Card('spades', 'six', 'six of spades'),
                new Card('spades', 'seven', 'seven of spades'),
                new Card('spades', 'eight', 'eight of spades'),
                new Card('spades', 'nine', 'nine of spades'),
                new Card('spades', 'four', 'ten of spades'),
                new Card('spades', 'jack', 'jack of spades'),
                new Card('spades', 'queen', 'queen of spades'),
                new Card('spades', 'king', 'king of spades')
            ];
        },
        'shuffle': function(){
            // TODO: implement
        },
        'deal': function(num_cards){
            // TODO: implement
        },
    };

    return deck;
}());
