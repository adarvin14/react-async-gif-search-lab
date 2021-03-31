import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

    state = {
        gifs: []
    }

    render() {
        render (
            <div>
                <GifSearch fetchGIFs={this.fetchGIFs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

    fetchGIFs = (query = "dogs") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    gifs: data.map( gif => ({ url: gif.images.original.url }))
                })
            })
    }

    componentDidMount() {
        this.fetchGIFs()
    }
}