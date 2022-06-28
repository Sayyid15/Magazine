<?php
/**
 * @return array
 */
function getProducts()
{
    return [
        [
            "id" => 1,
            "name" => "racing goggles",
        ],
        [
            "id" => 2,
            "name" => "training goggles",
        ],
        [
            "id" => 3,
            "name" => "racing cap",

        ],
        [
            "id" => 4,
            "name" => "training cap",

        ],
        [
            "id" => 5,
            "name" => "men jammer",

        ],
        [
            "id" => 6,
            "name" => "men trunks",

        ],
        [
            "id" => 7,
            "name" => " fina approved jammer",

        ],
        [
            "id" => 8,
            "name" => " women one piece ",

        ],
        [
            "id" => 9,
            "name" => " fina approved kneeskin",

        ],
        [
            "id" => 10,
            "name" => " tech paddles",

        ],
        [
            "id" => 11,
            "name" => " kickboard",

        ],
        [
            "id" => 12,
            "name" => " flippers",

        ],
        [
            "id" => 13,
            "name" => " pullbuoy",

        ],
        [
            "id" => 14,
            "name" => " snorkel",

        ],
        [
            "id" => 15,
            "name" => " mesh bag",

        ],
        [
            "id" => 16,
            "name" => " backpack",

        ],
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getProductsDetails($id)
{
    $tags = [


        1 => [
            "id" => 1,
            "img" => "img/racing goggles.png",
            "details" => "For swimming competitions",
            "brand" => "Speedo",
            "price" => "50",
        ],
        2 => [
            "id" => 2,
            "img" => "img/training goggles.png",
            "details" => "Made for training",
            "brand" => "Speedo",
            "price" => "50",
        ],
        3 => [
            "id" => 3,
            "img" => "img/ racing cap.png",
            "details" => "For hairprotection at competitions ",
            "brand" => "Speedo",
            "price" => "50",
        ],
        4 => [
            "id" => 4,
            "img" => "img/training cap.png",
            "details" => " For hairprotection at training",
            "brand" => "Speedo",
            "price" => "50",
        ],
        5 => [
            "id" => 5,
            "img" => "img/men jammer.png",
            "details" => "Long swimming jammer for training",
            "brand" => "Speedo",
            "price" => "50",
        ],
        6 => [
            "id" => 6,
            "img" => "img/men trunks.png",
            "details" => "Short swimming trunks for training",
            "brand" => "Speedo",
            "price" => "50",
        ],
        7 => [
            "id" => 7,
            "img" => "img/fina approved jammer.png",
            "details" => "Jammmers for men only for competition",
            "brand" => "Speedo",
            "price" => "50",
        ],
        8 => [
            "id" => 8,
            "img" => "img/women one piece.png",
            "details" => "Training swimwear for women",
            "brand" => "Speedo",
            "price" => "50",
        ],
        9 => [
            "id" => 9,
            "img" => "img/fina approved kneeskin.png",
            "details" => "Long swimwear for women only for competition",
            "brand" => "Speedo",
            "price" => "50",
        ],
        10 => [
            "id" => 10,
            "img" => "img/tech paddles.png",
            "details" => "For pull excercises at training for your hands",
            "brand" => "Speedo",
            "price" => "50",
        ],
        11 => [
            "id" => 11,
            "img" => "img/kickboard.png",
            "details" => "To hold on for kick excercises",
            "brand" => "Speedo",
            "price" => "50",
        ],
        12 => [
            "id" => 12,
            "img" => "img/flippers.png",
            "details" => "To wear on your foot for kick excercises",
            "brand" => "Speedo",
            "price" => "50",
        ],
        13 => [
            "id" => 13,
            "img" => "img/pullbouy.png",
            "details" => "To put between your legs for pull excercises",
            "brand" => "Speedo",
            "price" => "50",
        ],
        14 => [
            "id" => 14,
            "img" => "img/snorkel.png",
            "details" => "For underwater swimming",
            "brand" => "Speedo",
            "price" => "50",
        ],
        15 => [
            "id" => 15,
            "img" => "img/mesh bag.png",
            "details" => "To carry swim accessores ",
            "brand" => "Speedo",
            "price" => "50",
        ],
        16 => [
            "id" => 16,
            "img" => "img/backpack.png",
            "details" => "To carry swimwear",
            "brand" => "Speedo",
            "price" => "50",
        ],
    ];

    return $tags[$id];
}
