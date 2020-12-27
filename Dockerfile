# Indica qual imagem do python a ser utilizada
FROM python:3.8

# Indicacao para python nao gerar arquivos .pyc
ENV PYTHONDONTWRITEBYTECODE 1

# Evitar que logs fiquem armazenar em buffer
ENV PYTHONUNBUFFERED 1

# Definir diretorio de trabalho como "/code"
WORKDIR /code

# Instalar dependencias do ambiente python
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copiar arquivos locais para o diretorio de trabalho do container
COPY . .