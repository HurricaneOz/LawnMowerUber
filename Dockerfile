FROM ubuntu:latest
LABEL authors="okha1"

# Set working directory
WORKDIR /app

# Install OpenJDK 17 (needed for Spring Boot)
RUN apt-get update && \
    apt-get install -y openjdk-17-jdk maven && \
    apt-get clean \

# Copy project files
COPY . .

# Build the Spring Boot JAR
RUN mvn clean package -DskipTests

# Expose port
EXPOSE 8080

# Run Spring Boot app
ENTRYPOINT ["java", "-jar", "target/lawnmower-project-0.0.1-SNAPSHOT.jar"]
