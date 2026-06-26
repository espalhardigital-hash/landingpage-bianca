import boto3
from botocore.client import Config
from app.config import settings

class MinioService:
    def __init__(self):
        # Crear cliente S3 configurado para MinIO
        self.s3_client = boto3.client(
            's3',
            endpoint_url=f"http://{settings.MINIO_ENDPOINT}",
            aws_access_key_id=settings.MINIO_ACCESS_KEY,
            aws_secret_access_key=settings.MINIO_SECRET_KEY,
            config=Config(signature_version='s3v4'),
            region_name='us-east-1' # Región dummy requerida por S3v4
        )
        self.bucket_name = "lead-magnets"
        self.object_name = "guia-ansiedad.pdf"

    def generate_presigned_download_url(self) -> str:
        """
        Genera una URL presignada para descargar el eBook PDF de MinIO.
        Válida por 15 minutos (900 segundos).
        """
        try:
            url = self.s3_client.generate_presigned_url(
                'get_object',
                Params={
                    'Bucket': self.bucket_name,
                    'Key': self.object_name,
                    'ResponseContentDisposition': 'attachment; filename="guia-ansiedad.pdf"'
                },
                ExpiresIn=900
            )
            
            # Reemplazar el host interno de Docker por el host externo si difieren
            # Esto evita que el navegador intente descargar desde 'http://minio:9000'
            internal_host = settings.MINIO_ENDPOINT
            external_host = settings.MINIO_EXTERNAL_ENDPOINT
            if internal_host != external_host:
                url = url.replace(f"http://{internal_host}", f"http://{external_host}")
                url = url.replace(f"https://{internal_host}", f"http://{external_host}")
                
            return url
        except Exception as e:
            # Fallback en caso de error para desarrollo local nativo fuera de Docker
            print(f"Error al generar presigned URL en MinIO: {e}")
            return "http://localhost:8080/static/guia-ansiedad.pdf"

minio_service = MinioService()
