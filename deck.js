var deck = (function(){
    var aces_high = false;

    var Card = function(suit, rank, name){
        this.suit = suit;
        this.rank = rank;
        this.name = name;

        switch(rank){
            case 'ace': 
                if (aces_high){this.rank_index = 12;}
                else {this.rank_index = 0;}
                break;
            case 'two':
                if (aces_high){this.rank_index = 0;}
                else {this.rank_index = 1;}
                break;
            case 'three':
                if (aces_high){this.rank_index = 1;}
                else {this.rank_index = 2;}
                break;
            case 'four':
                if (aces_high){this.rank_index = 2;}
                else {this.rank_index = 3;}
                break;
            case 'five':
                if (aces_high){this.rank_index = 3;}
                else {this.rank_index = 4;}
                break;
            case 'six':
                if (aces_high){this.rank_index = 4;}
                else {this.rank_index = 5;}
                break;
            case 'seven':
                if (aces_high){this.rank_index = 5;}
                else {this.rank_index = 6;}
                break;
            case 'eight':
                if (aces_high){this.rank_index = 6;}
                else {this.rank_index = 7;}
                break;
            case 'nine':
                if (aces_high){this.rank_index = 7;}
                else {this.rank_index = 8;}
                break;
            case 'ten':
                if (aces_high){this.rank_index = 8;}
                else {this.rank_index = 9;}
                break;
            case 'jack':
                if (aces_high){this.rank_index = 9;}
                else {this.rank_index = 10;}
                break;
            case 'queen':
                if (aces_high){this.rank_index = 10;}
                else {this.rank_index = 11;}
                break;
            case 'king':
                if (aces_high){this.rank_index = 11;}
                else {this.rank_index = 12;}
                break;
        }
    };

    var deck = {
        'initialize': function(){
            // in order cards defined; like opening a fresh deck.
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
            // only works after initialize() called
            if (this.cards !== undefined) {
                // 2 indices to be switched
                var cardIndex = this.cards.length;
                var switchIndex;
                // buffer cardIndex card during switch
                var currentCard;

                while (0 < cardIndex) {
                    // pick a random card to switch with cards in order
                    switchIndex = Math.floor(
                        Math.random()*cardIndex);
                    cardIndex = cardIndex - 1;
                    // save to buffer
                    currentCard = this.cards[cardIndex];
                    // perform switch
                    this.cards[cardIndex] = this.cards[switchIndex];
                    this.cards[switchIndex] = currentCard;
                }
            }
        },
        'deal': function(num_cards){
            // initialize dealt cards array
            var dealt_cards = [];
            for (var i = 0; i<num_cards; i++) {
                // add cards from the front of the deck
                dealt_cards.push(
                    this.cards.shift()
                );
            }
            return dealt_cards;
        },
        'addCardToDeck': function(card, top_of_deck=true) {
            // TODO: implement this
        },
        'cutTheDeck': function(deviation_from_middle=.2){
            // TODO: implement this
        }
    };
    // return object
    return deck;
}());
