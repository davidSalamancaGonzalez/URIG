export interface imageBulk {
    id: string
    created_at: string
    updated_at: string
    promoted_at: string
    width: number
    height: number
    color: string
    blur_hash: string
    description: string | null
    alt_description: string
    urls: Urls
    links: Links
    likes: number
    liked_by_user: boolean
    current_user_collections: any[]
    sponsorship: string
    topic_submissions : TopicSubmissions 
    user: User
    exif: Exif
    location: Location
    views: number
    downloads: number
  }
  
  export interface Urls {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
    small_s3: string
  }
  
  export interface Links {
    self: string 
    html: string
    download: string
    download_location: string
  }
  
  export interface TopicSubmissions {
    travel?: Travel
    wallpapers?: Wallpapers
    nature?: Nature
  }
  
  export interface Travel {
    status: string
  }
  
  export interface Wallpapers {
    status: string
    approved_on: string
  }
  
  export interface Nature {
    status: string
  }
  
  export interface User {
    id: string
    updated_at: string
    username: string
    name: string
    first_name: string
    last_name: string | null
    twitter_username: string | null
    portfolio_url: string | null
    bio: string | null
    location: string | null
    links: Links2
    profile_image: ProfileImage
    instagram_username: string  | null
    total_collections: number
    total_likes: number
    total_photos: number
    accepted_tos: boolean
    for_hire: boolean
    social: Social
  }
  
  export interface Links2 {
    self: string
    html: string
    photos: string
    likes: string
    portfolio: string
    following: string
    followers: string
  }
  
  export interface ProfileImage {
    small: string
    medium: string
    large: string
  }
  
  export interface Social {
    instagram_username: string  | null
    portfolio_url: string | null
    twitter_username: string | null
    paypal_email: string | any
  }
  
  export interface Exif {
    make: string  | null
    model: string  | null
    name: string  | null
    exposure_time: string  | null
    aperture: string  | null
    focal_length: string  | null
    iso: string  | null
  }
  
  export interface Location {
    name: string | null
    city: string | any
    country: string | null
    position: Position
  }
  
  export interface Position {
    latitude: number | null
    longitude: number | null
  }
  