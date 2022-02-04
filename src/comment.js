const modalSection = (movie, count) => `<div class="popup-container">
                <div class="popup">
                    <button class="btn close">X</button>
                    <div class="details">
                        <div>
                            <img class="img" src="${movie.image.original}" height="450" width="500"/>
                        </div>
                        <div>
                            <ul class="prop">
                                <h1> ${movie.name} </h1>
                                <li> Language: ${movie.language}</li>
                                <li> Type: ${movie.type}</li>
                                <li> Premiered: ${movie.premiered}</li>
                                <li> Rating: ${movie.rating.average}</li>
                                <li> Network: ${movie.network.name}</li>
                                <li> URL: ${movie.url}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="summary">
                        <p> ${movie.summary} </p>
                    </div>
                    <div>
                        <h2> Comments (${count}) </h2>
                        <ul class="comments">
                        </ul>
                    </div>
                    <div>
                        <form id="comment-form" name="comment-form" class="details">
                            <input type="text" name="name" placeholder="your name" required/>
                            <input type="text" name="comment" placeholder="Leave a comment" required/>
                            <button class="btn"> Post </button>
                        </form>
                    </div>
                </div>
            </div>`;

export default modalSection;
