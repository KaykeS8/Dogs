export const API_URL = "https://dogsapi.origamid.dev/json"

export function TOKEN_POST(body: { username: string, password: string }) {
  return {
    url: API_URL + '/jwt-auth/v1/token',
    options: {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export function TOKEN_VALIDATE_POST(token: string) {
  return {
    url: API_URL + '/jwt-auth/v1/token/validate',
    options: {
      method: "POST",
      headers: {
        Authorization: 'Bearer ' + token
      },
    }
  }
}

export function USER_GET(token: string) {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  }
}


export function USER_POST(body: { username: string, password: string, email: string }) {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export function PHOTO_POST(token: string, formData: any) {
  return {
    url: API_URL + '/api/photo',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData
    }
  }
}

export function PHOTOS_GET(photos: { page: number, total: number, user: number }) {
  return {
    url: `${API_URL}/api/photo/?_page=${photos.page}&_total=${photos.total}&_user=${photos.user}`,
    options: {
      method: 'GET',
      caches: 'no-store'
    }
  }
}

export function PHOTO_GET(id: string) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: 'GET',
      caches: 'no-store'
    }
  }
}

export function COMMENT_POST(id: number, body: { comment: string }) {
  return {
    url: `${API_URL}/api/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer' + window.localStorage.getItem('token'),
      },
      body: JSON.stringify(body)
    },
  }
}

export function PHOTO_DELETE(id: number) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer' + window.localStorage.getItem('token'),
      },
    }
  }
}

export function PASSWORD_LOST(body: { login: string; url: string }) {
  return {
    url: API_URL + '/api/password/lost',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export function PASSWORD_RESET(body: { login: string; password: string, key: string }) {
  return {
    url: API_URL + '/api/password/reset',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export function STATS_GET() {
  return {
    url: API_URL + '/api/stats',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer' + window.localStorage.getItem('token'),
      }
    }
  }
}