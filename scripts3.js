var products=[
    {
        name:'Saalad',
        type:'Vegatable',
        quantity:1,
        price:500
    },
    {
        name:'Banana',
        type:'Fruits',
        quantity:1,
        price:700
    },
    {
        name:'Mchicha',
        type:'Vegetable',
        quantity:3,
        price:600
    
    },
    {
        name:'Orange',
        type:'Fruit',
        quantity:3,
        price:899
    }


    
];

// Find product using particular type using EMCA 6

var filteredProducts=[];

for(var i=0;i<products.length; i++){
    if (products[i].type=='Fruits'){
        
        filteredProducts.push(products[i])

    }
}

// Print type 

console.log(filteredProducts)




// Applying Using Array Filter Helpers 


var fruitProducts=products.filter(function(product){

    return product.type==='Fruit'
})

// Print Out Values

//console.log(fruitProducts)




// Special Case on Array Filter Helpers


// Type is vegetable quantity is greater than on and price is greater than 500

// Apply filter helper here to solve problems


var priceFruitProduct=products.filter(function(product){
    // Return Complex Filter 

    return product.type==="Vegetable" && product.quantity>1 && product.price>500;

});

// Print Out Products 

console.log(priceFruitProduct)

// Application Of Filters 


/**
 *  1.  post id1 and comment id (more than on id to the post )-->  comment 1 postid1 & postid2
 *  2.  post id2 and comment id (more than one comment in post id )---> comment 1 postid2 & postid2 
 *  Mostly using on forum 
 *  
 *
 */


// Solving Really project example 

var post=[
    {
        id:4,
        title:'New Post'
    }
]

var comments=[
    {
        postid:4,
        content:'This is awesome'
    },
    {
        postid:3,
        content:'This is delicious'
    },
    {
        postid:4,
        content:'This is fantansic'
    }

];

function CommentForPost(post,comments){

    return comments.filter(function(comment){

        return comment.postid===post.id

    });

}

console.log(CommentForPost(post,comments))





































