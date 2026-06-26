#!/bin/bash
# Script para inicializar MinIO localmente si no se usa docker-compose init
echo "Configurando alias de MinIO..."
docker run --rm --network host minio/mc alias set myminio http://localhost:9080 minioadmin minioadmin

echo "Creando bucket 'lead-magnets'..."
docker run --rm --network host minio/mc mb myminio/lead-magnets || true

echo "Configurando acceso público de descarga para el bucket..."
docker run --rm --network host minio/mc anonymous set download myminio/lead-magnets || true

echo "Generando archivo eBook PDF simulado..."
echo "eBook PDF content mock" > /tmp/guia-ansiedad.pdf

echo "Subiendo 'guia-ansiedad.pdf' al bucket..."
docker cp /tmp/guia-ansiedad.pdf lead_magnet_minio:/tmp/guia-ansiedad.pdf
docker exec lead_magnet_minio mc cp /tmp/guia-ansiedad.pdf myminio/lead-magnets/guia-ansiedad.pdf

echo "MinIO inicializado correctamente de forma manual!"
