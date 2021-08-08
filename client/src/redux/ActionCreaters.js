import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl'
import { history } from '../App'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//Reviews

export const addReviews = (reviews) => ({
    type: ActionTypes.ADD_REVIEWS,
    payload: reviews
})
export const addReview = (review) => ({
    type: ActionTypes.ADD_REVIEW,
    payload: review
})
export const removeReview = (review) => ({
    type: ActionTypes.DELETE_REVIEW,
    payload: review
})

export const reviewsLoading = () => ({
    type: ActionTypes.REVIEWS_LOADING
})
export const reviewsFailed = (errMess) => ({
    type: ActionTypes.REVIEWS_FAILED,
    payload: errMess
})

export const fetchReviews = () => (dispatch) => {
    dispatch(reviewsLoading())
    return fetch(`${baseUrl}/reviews${window.location.search}`)
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error("Error " + response.status + " : " + response.statusText)
                error.response = response
                throw error
            }
        }, error => {
            var errMess = new Error(error.message)
            throw errMess
        })
        .then(response => response.json())
        .then(reviews => {
            dispatch(addReviews(reviews))
        })
        .catch(error => {
            dispatch(reviewsFailed(error.message))
        })
}

export const updateReview = (review) => ({
    type: ActionTypes.UPDATE_REVIEW,
    payload: review
})

export const postLike = (reviewId) => (dispatch) => {
    console.log(localStorage.getItem('jwt'))
    return fetch(baseUrl+'/reviews/likes/' + reviewId, {
        method: 'PUT',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('jwt'),
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok)
                return response
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response
                throw error
            }
        }, error => {
            var errMess = new Error(error.message)
            throw errMess
        })
        .then(response => response.json())
        .then(review => {
            dispatch(updateReview(review))
            toast("Review Liked!");
        })
        .catch(error => {
            console.log('Put Like Review', error.message)
            toast.error("like failed, Are you logged In?");
        })
}


export const postDislike = (reviewId) => (dispatch) => {
    return fetch(baseUrl+'/reviews/dislikes/' + reviewId, {
        method: 'PUT',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('jwt'),
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok)
                return response
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response
                throw error
            }
        }, error => {
            var errMess = new Error(error.message)
            throw errMess
        })
        .then(response => response.json())
        .then(review => {
            dispatch(updateReview(review))
            toast("Review Disliked!");
        })
        .catch(error => {
            console.log('Put Dislike Review', error.message)
            toast.error("Dislike failed, Are you logged In?");
        })
}

export const postReview = (rating, tags, review, product) => (dispatch) => {
    var newReview = {
        rating,
        tags,
        review,
        product
    }
    console.log(newReview);
    return fetch(baseUrl+'/reviews', {
        method: 'POST',
        body: JSON.stringify(newReview),
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('jwt'),
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            if (response.ok)
                return response
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response
                throw error
            }
        }, error => {
            var errMess = new Error(error.message)
            throw errMess
        })
        .then(response => response.json())
        .then(review => {
            if (!review.message) {
                dispatch(addReview(review))
                toast.success("Review Added!");
            }
        })
        .catch(error => {
            console.log('Post Review', error.message)
            toast.error("Review didn't added, Have you already given Review?")
        })
}

export const editReview = (reviewId, rating, tags, review, product) => (dispatch) => {
    var newReview = {
        rating,
        tags,
        review,
        product
    }
    console.log(newReview);
    return fetch(baseUrl+'/reviews/' + reviewId, {
        method: 'PUT',
        body: JSON.stringify(newReview),
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('jwt'),
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            if (response.ok)
                return response
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response
                throw error
            }
        }, error => {
            var errMess = new Error(error.message)
            throw errMess
        })
        .then(response => response.json())
        .then(review => {
            if (!review.message) {
                dispatch(updateReview(review))
                toast.success("Review Updated!");
            }
        })
        .catch(error => {
            console.log('Edit Product', error.message)
            toast.error("Review Didn't Updated, Are you logged In?");
        })
}
export const deleteReview = (reviewId) => (dispatch) => {
    console.log(localStorage.getItem('jwt'))
    return fetch(baseUrl+'/reviews/' + reviewId, {
        method: 'DELETE',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('jwt'),
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok)
                return response
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response
                throw error
            }
        }, error => {
            var errMess = new Error(error.message)
            throw errMess
        })
        .then(response => response.json())
        .then(review => {
            console.log(review)
            dispatch(removeReview(review))
            toast.dark("Review deleted!");
        })
        .catch(error => {
            console.log('Put Like Review', error.message)
            toast.error("Deleting review failed, Are you logged In?");
        })
}


// products
export const addProducts = (products) => ({
    type: ActionTypes.ADD_PRODUCTS,
    payload: products
})
export const addProduct = (product) => ({
    type: ActionTypes.ADD_PRODUCT,
    payload: product
})
export const updateProduct = (product) => ({
    type: ActionTypes.UPDATE_PRODUCT,
    payload: product
})
export const removeProduct = (product) => ({
    type: ActionTypes.DELETE_PRODUCT,
    payload: product
})
export const productsLoading = () => ({
    type: ActionTypes.PRODUCTS_LOADING
})
export const productsFailed = (errMess) => ({
    type: ActionTypes.PRODUCTS_FAILED,
    payload: errMess
})

export const fetchProducts = () => (dispatch) => {
    dispatch(productsLoading(true))
    console.log(window.location.search)
    return fetch(`${baseUrl}/products${window.location.search}`)
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error("Error " + response.status + " : " + response.statusText)
                error.response = response
                throw error
            }
        }, error => {
            var errMess = new Error(error.message)
            throw errMess
        })
        .then(response => response.json())
        .then(products => {
            dispatch(addProducts(products))
        })
        .catch(error => {
            dispatch(productsFailed(error.message))
        })
}
export const postProduct = (productName, price, catogery, subCatogery, description, featured, pic) => (dispatch) => {
    var newProduct = {
        productName,
        price,
        catogery,
        subCatogery,
        description,
        featured,
        pic
    }
    const data = new FormData()
    data.append("file", pic)
    data.append("upload_preset", "instaclone")
    data.append("cloud_name", "sohil")
    return fetch("https://api.cloudinary.com/v1_1/sohil/image/upload", {
        method: "post",
        body: data
    })
        .then(res => res.json())
        .then(data => {
            newProduct.pic = data.url
        })
        .then(data => {
            fetch(baseUrl+'/products', {
                method: 'POST',
                body: JSON.stringify(newProduct),
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('jwt'),
                    "Content-Type": "application/json"
                }
            })
                .then(response => {
                    if (response.ok)
                        return response
                    else {
                        var error = new Error('Error ' + response.status + ': ' + response.statusText)
                        error.response = response
                        throw error
                    }
                }, error => {
                    var errMess = new Error(error.message)
                    throw errMess
                })
                .then(response => response.json())
                .then(product => {
                    if (!product.message) {
                        dispatch(addProduct(product))
                        toast.success("Your Product is Added!");
                    }
                })
        })
        .catch(err => {
            console.log(err)
        })
}
export const editProduct = (productId, productName, price, catogery, subCatogery, description, featured, pic) => (dispatch) => {
    var newProduct = {
        productName,
        price,
        catogery,
        subCatogery,
        description,
        featured,
        pic
    }
    const data = new FormData()
    data.append("file", pic)
    data.append("upload_preset", "instaclone")
    data.append("cloud_name", "sohil")
    return fetch("https://api.cloudinary.com/v1_1/sohil/image/upload", {
        method: "post",
        body: data
    })
        .then(res => res.json())
        .then(data => {
            newProduct.pic = data.url
        })
        .then(data => {
            fetch(baseUrl+'/products/' + productId, {
                method: 'PUT',
                body: JSON.stringify(newProduct),
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('jwt'),
                    "Content-Type": "application/json"
                }
            })
                .then(response => {
                    if (response.ok)
                        return response
                    else {
                        var error = new Error('Error ' + response.status + ': ' + response.statusText)
                        error.response = response
                        throw error
                    }
                }, error => {
                    var errMess = new Error(error.message)
                    throw errMess
                })
                .then(response => response.json())
                .then(product => {
                    if (!product.message) {
                        dispatch(updateProduct(product))
                        toast("Product Updated");
                    }
                })
        })
        .catch(error => {
            console.log('Edit Product', error.message)
            toast.error("Editinf product failed, Are you logged In?");
        })
}

export const deleteProduct = (productId) => (dispatch) => {
    console.log(localStorage.getItem('jwt'))
    return fetch(baseUrl+'/products/' + productId, {
        method: 'DELETE',
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('jwt'),
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok)
                return response
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response
                throw error
            }
        }, error => {
            var errMess = new Error(error.message)
            throw errMess
        })
        .then(response => response.json())
        .then(product => {
            dispatch(removeProduct(product))
            toast.dark("Product deleted!");
        })
        .catch(error => {
            toast.error("Deleting product failed, Are you logged In?");
        })
}

// User
export const addUser = (user) => ({
    type: ActionTypes.ADD_USER,
    payload: user
})
export const userLoginFailed = (errMess) => ({
    type: ActionTypes.USER_LOGIN_FAILED,
    payload: errMess
})
export const signUp = (name, email, password, fullname) => (dispatch) => {
    const newUser = {
        name,
        email,
        password,
        fullname
    }
    return fetch(baseUrl+'/users/signup', {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(newUser)
    })
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error("Error " + response.status + " : " + response.statusText)
                error.response = response
                throw error
            }
        }, error => {
            var errMess = new Error(error.message)
            throw errMess
        })
        .then(response => response.json())
        .then(res => {
            history.push('/signin')
            console.log(res.message)
        })
        .catch(error => {
            dispatch(userLoginFailed(error.message))
        })
}

export const signIn = (email, password) => (dispatch) => {
    const loginUser = {
        email,
        password
    }
    console.log('reached at actionCreater' + loginUser)
    return fetch(baseUrl+'/users/signin', {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(loginUser)
    })
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error("Error " + response.status + " : " + response.statusText)
                error.response = response
                throw error
            }
        }, error => {
            var errMess = new Error(error.message)
            throw errMess
        })
        .then(response => response.json())
        .then(user => {
            localStorage.setItem("jwt", user.token)
            console.log(localStorage.getItem("jwt"))
            dispatch(addUser(user))
            history.push('/home')
            toast.success("LogIn success!");
        })
        .catch(error => {
            dispatch(userLoginFailed(error.message))
            toast.error("Login failed!")
        })
}
export const fetchUser = () => (dispatch) => {
    return fetch(baseUrl+'/users/userdata', {
        method: "GET",
        headers: {
            "Content-Type": "Application/json",
            "Authorization": "Bearer " + localStorage.getItem('jwt')
        }
    })
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error("Error " + response.status + " : " + response.statusText)
                error.response = response
                throw error
            }
        }, error => {
            var errMess = new Error(error.message)
            throw errMess
        })
        .then(response => response.json())
        .then(user => {
            dispatch(addUser(user))
            history.push('/home')
            toast.success("LoggedIn!");
        })
        .catch(error => {
            dispatch(userLoginFailed(error.message))
        })
}

export const clearUser = () => ({
    type: ActionTypes.CLEAR_USER
})
export const logout = () => (dispatch) => {
    console.log('reached at logout Actioncreator.')
    localStorage.clear()
    console.log("Local Storage : " + localStorage)
    dispatch(clearUser())
    toast.success("Logged out!");
}


//company
export const addCompany = (company) => ({
    type: ActionTypes.ADD_COMPANY,
    payload: company
})
export const companyLoginFailed = (errMess) => ({
    type: ActionTypes.COMPANY_LOGIN_FAILED,
    payload: errMess
})
export const logoutCompany = () => (dispatch) => {
    console.log('reached at logout Actioncreator.')
    localStorage.clear()
    console.log("Local Storage : " + localStorage)
    dispatch(clearCompany())
}
export const clearCompany = () => ({
    type: ActionTypes.CLEAR_COMPANY
})

export const fetchCompany = () => (dispatch) => {
    return fetch(baseUrl+'/company/companydata', {
        method: "GET",
        headers: {
            "Content-Type": "Application/json",
            "Authorization": "Bearer " + localStorage.getItem('jwt')
        }
    })
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error("Error " + response.status + " : " + response.statusText)
                error.response = response
                throw error
            }
        }, error => {
            var errMess = new Error(error.message)
            throw errMess
        })
        .then(response => response.json())
        .then(company => {
            dispatch(addCompany(company))
            history.push('/home')
        })
        .catch(error => {
            dispatch(companyLoginFailed(error.message))
        })
}

export const companySignUp = (name, email, password, fullname) => (dispatch) => {
    const newCompany = {
        name,
        email,
        password,
        fullname
    }
    return fetch(baseUrl+'/company/signup', {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(newCompany)
    })
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error("Error " + response.status + " : " + response.statusText)
                error.response = response
                throw error
            }
        }, error => {
            var errMess = new Error(error.message)
            throw errMess
        })
        .then(response => response.json())
        .then(res => {
            history.push('/company/signin')
            console.log(res.message)
        })
        .catch(error => {
            dispatch(companyLoginFailed(error.message))

        })
}

export const companySignIn = (email, password) => (dispatch) => {
    const loginCompany = {
        email,
        password
    }
    console.log('reached at actionCreater' + loginCompany)
    return fetch(baseUrl+'/company/signin', {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(loginCompany)
    })
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error("Error " + response.status + " : " + response.statusText)
                error.response = response
                throw error
            }
        }, error => {
            var errMess = new Error(error.message)
            throw errMess
        })
        .then(response => response.json())
        .then(company => {
            if (company.message) {
                toast("Sorry, you are not verified yet. we will email you once you will verified");
            }
            else {
                localStorage.setItem("jwt", company.token)
                dispatch(addCompany(company))
                console.log(company)
                history.push('/home')
                toast.success("LogIn as Company success!");
            }
        })
        .catch(error => {
            dispatch(companyLoginFailed(error.message))
            toast.error("LogIn Failed!");
        })
}
export const resetPassword = (email) => (dispatch) => {
    const reqBody = {
        email: email
    }
    console.log(email + ' at action creator')
    return fetch(baseUrl+'/users/resetpassword', {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(reqBody)
    })
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error("Error " + response.status + " : " + response.statusText)
                error.response = response
                throw error
            }
        }, error => {
            var errMess = new Error(error.message)
            throw errMess
        })
        .then(response => response.json())
        .then(res => {
            if (res.message) {
                toast(res.message);
            }
            else if (res.error) {
                toast(res.error);
            }
        })
        .catch(error => {
            toast.error("Failed to Send Reset password Link! Try Again.");
        })
}
export const newPassword = (password, token) => (dispatch) => {
    const passwordDetail = {
        password: password,
        token: token
    }
    return fetch(baseUrl+'/users/newpassword', {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(passwordDetail)
    })
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error("Error " + response.status + " : " + response.statusText)
                error.response = response
                throw error
            }
        }, error => {
            var errMess = new Error(error.message)
            throw errMess
        })
        .then(response => response.json())
        .then(res => {
            if (res.message) {
                toast(res.message);
            }
            else if (res.error) {
                toast(res.error);
            }
        })
        .catch(error => {
            toast.error("Failed to Reset password! Try Again.");
        })
}

export const companyResetPassword = (email) => (dispatch) => {
    const reqBody = {
        email: email
    }
    console.log(email + ' at action creator')
    return fetch(baseUrl+'/company/resetpassword', {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(reqBody)
    })
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error("Error " + response.status + " : " + response.statusText)
                error.response = response
                throw error
            }
        }, error => {
            var errMess = new Error(error.message)
            throw errMess
        })
        .then(response => response.json())
        .then(res => {
            if (res.message) {
                toast(res.message);
            }
            else if (res.error) {
                toast(res.error);
            }
        })
        .catch(error => {
            toast.error("Failed to Send Reset password Link! Try Again.");
        })
}
export const companyNewPassword = (password, token) => (dispatch) => {
    const passwordDetail = {
        password: password,
        token: token
    }
    return fetch(baseUrl+'/company/newpassword', {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(passwordDetail)
    })
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error("Error " + response.status + " : " + response.statusText)
                error.response = response
                throw error
            }
        }, error => {
            var errMess = new Error(error.message)
            throw errMess
        })
        .then(response => response.json())
        .then(res => {
            if (res.message) {
                toast(res.message);
            }
            else if (res.error) {
                toast(res.error);
            }
        })
        .catch(error => {
            toast.error("Failed to Reset password! Try Again.");
        })
}