# Facet

Facet is a wallpaper website that lets users pick pictures from the pexel api and add them to their own collection of wallpapers. In the website, you will be able search for a type of picture and set the picture as the background of the website.

## User Story

Users can navigate to one of three pages; Personal page which shows personal collection of user photos, search page where users can search for photos, and random which shows a random picture. Users have the ability to add pictures into their personal collection after they search for a particular image, then set that picture as the wallpaper of the website.

## Link to Website
[Link](http://Facet.surge.sh)

## Component Hierarchy

![Component Hierarchy](https://res.cloudinary.com/ssohny/image/upload/v1551105769/IMG_0847.jpg)

## Wireframe

![Main](https://res.cloudinary.com/ssohny/image/upload/v1551105769/IMG_0846.jpg)

![My Photos](https://res.cloudinary.com/ssohny/image/upload/v1551105769/IMG_0842.jpg)

![Choose Photos](https://res.cloudinary.com/ssohny/image/upload/v1551105769/IMG_0845.jpg)

![Random Photos](https://res.cloudinary.com/ssohny/image/upload/v1551105769/IMG_0844.jpg)

## MVP

- Use pexel API to get random photos and also get photos based on user query.
- Render list of 100 pictures on the page
- Allow user to choose picture and submit which pictures are added to personal collection
- Show users their own collection of pictures
- Change background of website when user chooses from collection of pictures
- Give user ability to search for photo
- Display collection of pictures based on user input
- Able to add to collection of user photos
- Display random photo where user can add to own collection

## PostMVP

- Able to delete picture
- User can search based on original size of photo
- Next or previous photo when on random page
- Add user authentication

## Technologies Used
CSS, React.js

## Code Snippet
```
styleImage() {
  return (Object.keys(this.state.currentWallpaper).length === 0) ? 'none' : this.state.currentWallpaper.src.original;
}

render() {
  const image = this.styleImage();
  const style = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  }
  return (
    <div className="App" style={style}>
    </div>
  )
}
```
The code above explains how I was able to change the wallpaper of the website with inline styling. First I used a ternary statement outside of render to check whether my currentWallpaper state contained the object with info about my wallpaper. If there was a valid object, it returned the url of the original picture. I then set a variable called image to the returned value. I created another object with backgroundImage property with a value of the image and additional styling of the background. Then I set the style attribute of the entire app as the object I just created.
