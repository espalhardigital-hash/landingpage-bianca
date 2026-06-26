import json
import urllib.request
import urllib.error

API_URL = "http://localhost:8080/api/leads"

def test_endpoint(payload, description):
    print(f"\n--- Probando: {description} ---")
    data = json.dumps(payload).encode('utf-8')
    req = urllib.request.Request(
        API_URL, 
        data=data, 
        headers={'Content-Type': 'application/json'},
        method='POST'
    )
    try:
        with urllib.request.urlopen(req) as response:
            status = response.getcode()
            body = json.loads(response.read().decode('utf-8'))
            print(f"Respuesta HTTP {status}:")
            print(json.dumps(body, indent=2))
            return status, body
    except urllib.error.HTTPError as e:
        status = e.code
        body_raw = e.read().decode('utf-8')
        try:
            body = json.loads(body_raw)
        except Exception:
            body = body_raw
        print(f"Error HTTP {status}:")
        print(json.dumps(body, indent=2) if isinstance(body, dict) else body)
        return status, body

def run_tests():
    print("Iniciando Smoke Tests de la API de Leads...")
    
    import time
    payload_success = {
        "email": f"test-genz-{int(time.time())}@example.com",
        "source": "hero",
        "website": ""
    }
    test_endpoint(payload_success, "Registro de nuevo Lead (Debería devolver 201)")

    # Test 2: Registro Duplicado
    test_endpoint(payload_success, "Registro de Lead Duplicado (Debería devolver 200 sin duplicar)")

    # Test 3: Ataque de Bot con Honeypot
    payload_bot = {
        "email": "bot@spammer.com",
        "source": "hero",
        "website": "http://spammer.com" # Honeypot lleno
    }
    test_endpoint(payload_bot, "Registro con Honeypot lleno (Debería devolver 200 simulado sin registrar)")

    # Test 4: Email Inválido
    payload_invalid = {
        "email": "correo-invalido",
        "source": "cta-final",
        "website": ""
    }
    test_endpoint(payload_invalid, "Registro con email inválido (Debería devolver 422 de validación)")

if __name__ == "__main__":
    try:
        run_tests()
    except Exception as e:
        print(f"El servidor FastAPI no está respondiendo en {API_URL}. ¿Está levantado Docker?")
        print(f"Detalle del error: {e}")
