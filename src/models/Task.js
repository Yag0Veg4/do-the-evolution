/*import { Schema, model, models } from "mongoose";

const newArtist = new Schema({
    name_artist: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    biography: {
        type: String,
        required: true,
        trim: true,
    },
    imgs_artist: {
        type: Image,
    },
    img_banner: {
        type: Image,
        unique: true,
        required: true
    },
    genres: {
        type: Array,
        required: true,
        trim: true,
    },
    members: {
        member_name: {
            type: String,
            required: true,
            trim: true,
        },
        instrument: {
            type: String,
            required: true,
            trim: true,
        }
    },
    albums: {
        album_name: {
            type: String,
            required: true,
            trim: true,
        },
        img_album: {
            type: Image,
            required: true,
        },
        duration: {
            type: String,
            required: true
        },
        genres_album: {
            type: Array,
            required: true
        },
        songs: {
            song_name: {
                type: String,
                required: true,
                trim: true
            },
            song_duration: {
                type: String,
                required: true,
                trim: true,
            }
        }
    }
}, {
    timestamps: true,
})

export default models.Artist || model('Artist', newArtist)*/